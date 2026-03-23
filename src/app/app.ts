import { Component, OnInit, OnDestroy, signal, computed, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  selectedImage = signal<GalleryImage | null>(null);
  isVisible = signal<{ [key: string]: boolean }>({});

  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private intervalId: any;

  anniversaryDate = new Date('2025-03-22T00:00:00');

  timelineItems: TimelineItem[] = [
    {
      date: 'March 23, 2023',
      title: 'The Beginning',
      description: 'The day our hearts first met and everything changed forever. A moment that would define our lives.',
      image: 'https://picsum.photos/seed/love1/400/300'
    },
    {
      date: 'Again March',
      title: 'Litchi Date',
      description: 'Under the starlit sky, we shared our first drink together. Every moment felt like a dream.',
      image: 'https://picsum.photos/seed/love2/400/300'
    },
    {
      date: 'July 2023',
      title: 'My Birthday',
      description: 'My first birthday with you felt truly worth celebrating.',
      image: 'https://picsum.photos/seed/love3/400/300'
    },
    {
      date: 'November 2023',
      title: 'Madai hi kehnde',
      description: 'Exploring new places hand in hand, creating memories that would last a lifetime.',
      image: 'https://picsum.photos/seed/love4/400/300'
    },
    {
      date: 'December 2024',
      title: 'Getting Raka for you.',
      description: 'Cozy nights, warm embraces, and the joy of giving you something.',
      image: 'https://picsum.photos/seed/love5/400/300'
    },
    {
      date: 'March 23, 2026',
      title: 'Three Years Together',
      description: 'Years of true togetherness and lasting memories.',
      image: 'https://picsum.photos/seed/love6/400/300'
    }
  ];

  galleryImages: GalleryImage[] = [
    { src: 'https://pbs.twimg.com/media/CEu_jNFWgAADPUw.jpg', alt: 'Romantic moment' },
    { src: 'https://img.freepik.com/premium-photo/romantic-young-couple-sharing-special-moment-while-outdoors-young-couple-love-road-trip-couple-embracing-each-other-while-sitting-hood-their-car-nature_186523-2237.jpg?w=360', alt: 'Together forever' },
    { src: 'https://www.hindustantimes.com/ht-img/img/2025/02/16/400x225/sexual_communication_1739709244644_1739709251563.jpg', alt: 'Love in the air' },
    { src: 'https://picsum.photos/seed/couple4/800/600', alt: 'Our special day' },
    { src: 'https://thumbs.dreamstime.com/b/passionate-couple-having-sex-car-view-man-woman-window-fogged-213856477.jpg', alt: 'Golden moments' },
    { src: 'https://as2.ftcdn.net/jpg/00/65/31/29/1000_F_65312925_O745Tv9WT0e1WTsDJ8sZUr3b5ZS2ZZco.jpg', alt: 'Heart and soul' }
  ];

  hearts = signal<Array<{ left: string; animationDuration: string; animationDelay: string; size: string }>>([]);

  ngOnInit() {
    this.generateHearts();
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
    this.setupIntersectionObserver();
  }

  ngAfterViewInit() {
    setTimeout(() => this.setupIntersectionObserver(), 100);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private generateHearts() {
    const heartArray = [];
    for (let i = 0; i < 20; i++) {
      heartArray.push({
        left: Math.random() * 100 + '%',
        animationDuration: (Math.random() * 10 + 10) + 's',
        animationDelay: (Math.random() * 5) + 's',
        size: (Math.random() * 20 + 10) + 'px'
      });
    }
    this.hearts.set(heartArray);
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const anniversary = this.anniversaryDate.getTime();
    const diff = now - anniversary;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.days.set(days);
      this.hours.set(hours);
      this.minutes.set(minutes);
      this.seconds.set(seconds);
    }
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              this.isVisible.update(vis => ({ ...vis, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));
  }

  openLightbox(image: GalleryImage) {
    this.selectedImage.set(image);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage.set(null);
    document.body.style.overflow = 'auto';
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.selectedImage()) {
      this.closeLightbox();
    }
  }

  scrollToNext() {
    const timeline = document.querySelector('#timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  }
}