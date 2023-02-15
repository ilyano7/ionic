import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from '../announcement.service';

@Component({
  selector: 'app-add-announcment',
  templateUrl: './add-announcment.page.html',
  styleUrls: ['./add-announcment.page.scss'],
})
export class AddAnnouncmentPage implements OnInit {

  constructor(private Announcement: Announcement, private router: Router) { }

  ngOnInit() {
  }
  addNewAds(valueForm) {
    this.Announcement.addAnnouncment(valueForm);
    this.router.navigateByUrl('/');
  }

}
