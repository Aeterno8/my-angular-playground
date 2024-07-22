import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['./matrice.component.scss']
})
export class MatriceComponent implements OnInit {
  users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ];

  weeks = [1, 2, 3, 4, 5, 6, 7];

  // Mock data for time spent
  timeSpent = [
    { userId: 1, week: 0, time: '10h' },
    { userId: 1, week: 1, time: '8h' },
    { userId: 2, week: 0, time: '5h' },
    { userId: 2, week: 1, time: '7h' },
    { userId: 3, week: 0, time: '12h' },
    { userId: 3, week: 1, time: '9h' }
  ];

  editingCell: { userId: number, week: number } | null = null;
  editingValue: string = '';

  constructor() { }

  ngOnInit(): void { }

  getTimeSpent(userId: number, week: number): string {
    const entry = this.timeSpent.find(item => item.userId === userId && item.week === week);
    return entry ? entry.time : '-';
  }

  editCell(userId: number, week: number): void {
    this.editingCell = { userId, week };
    this.editingValue = this.getTimeSpent(userId, week) === '-' ? '' : this.getTimeSpent(userId, week);
  }

  isEditing(userId: number, week: number): boolean {
    return this.editingCell?.userId === userId && this.editingCell?.week === week;
  }

  saveCell(userId: number, week: number): void {
    if (this.editingValue.trim() === '') {
      this.editingValue = '-';
    }
    const entry = this.timeSpent.find(item => item.userId === userId && item.week === week);
    if (entry) {
      entry.time = this.editingValue;
    } else {
      this.timeSpent.push({ userId, week, time: this.editingValue });
    }
    this.editingCell = null;
  }
}
