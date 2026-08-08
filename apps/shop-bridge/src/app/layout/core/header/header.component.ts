import { Component, OnInit } from '@angular/core';

@Component({
    standalone: false,
    selector: 'thinkbridge-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    currentTheme: 'dark' | 'light' = 'dark';

    ngOnInit(): void {
        const savedTheme = localStorage.getItem('shopbridge_theme');
        if (savedTheme === 'light') {
            this.currentTheme = 'light';
            this.applyTheme('light');
        } else {
            this.currentTheme = 'dark';
            this.applyTheme('dark');
        }
    }

    toggleTheme(): void {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('shopbridge_theme', this.currentTheme);
        this.applyTheme(this.currentTheme);
    }

    private applyTheme(theme: 'dark' | 'light'): void {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark');
            root.classList.add('light');
        } else {
            root.classList.remove('light');
            root.classList.add('dark');
        }
    }
}
