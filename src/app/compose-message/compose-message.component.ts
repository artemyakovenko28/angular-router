import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss']
})
export class ComposeMessageComponent implements OnInit {

  sending: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.sending = false;
  }

  onCancel(): void {
    this.closePopup();
  }

  onSend(): void {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  private closePopup(): void {
    this.router.navigate([{outlets: {popup: null}}]);
  }
}
