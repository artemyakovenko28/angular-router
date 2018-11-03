import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {

  sending = false;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  onCancel(): void {
    this.closePopup();
  }

  onSend(message: string): void {
    this.sending = true;
    setTimeout(() => {
      // console.log(`message from textarea: ${message}`);
      this.sending = false;
      this.closePopup();
      alert(`message from textarea: ${message}`);
    }, 1000);
  }

  private closePopup(): void {
    this.router.navigate([{outlets: {popup: null}}]);
  }
}
