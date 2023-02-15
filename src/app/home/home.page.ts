import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  selectTabs= "All"
  myId="123"
  allAnnoncment
  myAnnouncments=[]
  selectedValue
  constructor(private announcement: Announcement) {}

ngOnInit(): void {
    
    this.allAnnoncment=this.announcement.getAllAnnouncement();


}
checkValue(event) { 
  this.allAnnoncment=[]
  this.selectedValue=event.detail.value

  if(this.selectedValue=="All-checked"){
    this.allAnnoncment=[]
   
    this.allAnnoncment=this.announcement.getAllAnnouncement();
  }
  else{
    this.allAnnoncment=this.announcement.getAnnouncementByCategory(this.selectedValue)
  }
}

  segmentChanged(e){
    this.myAnnouncments=[]
    if(this.selectTabs=="My announcments"){
      this.allAnnoncment.forEach(element => {
        if(element.owner=="123"){
          this.myAnnouncments.push(element)
        }
        
      });
    }
    console.log(e);
    
  }

}
