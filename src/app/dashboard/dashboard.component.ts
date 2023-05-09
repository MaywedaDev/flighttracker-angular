import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  flights: any;
  displayTime: any
  time: number = new Date().getTime()
  endDate = Math.round((this.time / 1000))
  timeRange: number = 1

  constructor(private flightService: FlightsService){}

  setDisplayTime(value: {value: number, type: 'minutes' | 'hour(s)' | 'day(s)'}){
    this.displayTime = value
  }

  formatDate(date: number){
		return new Date(date).toLocaleTimeString(undefined, {hour: '2-digit', hour12: true, minute:'2-digit'})
	}

  setTime(){
		if(this.timeRange < 1){
			this.setDisplayTime({value: Math.round((this.timeRange * 60)), type: 'minutes'})
		}
		if(this.timeRange >= 1 && this.timeRange < 24){
			this.setDisplayTime({value: this.timeRange, type: 'hour(s)'})
		}
		if(this.timeRange >= 24){
			this.setDisplayTime({value: Math.round(this.timeRange / 24), type: 'day(s)'})
		}
	}

  getFlightsData(){
    this.setTime()
    let startdate = this.endDate - (this.timeRange * 60 * 60)
    this.flightService.getFlights(startdate, this.endDate).subscribe((res) => {
      this.flights = res
      // console.log(res)
    }, (err) => {
      console.error("There is an error")
      this.flights = undefined 
    })
  }

  ngOnInit(): void {
     this.getFlightsData()
  }




}
