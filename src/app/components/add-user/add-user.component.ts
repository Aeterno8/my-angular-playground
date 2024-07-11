import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule],
    templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.sass'
})
export class AddUserComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
