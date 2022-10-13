import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';
import { SerachService } from 'src/app/services/serach.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
item:any;
  constructor(private snackBar: MatSnackBar,private seachService: SerachService) { }

  ngOnInit(): void {
    // this.seacrList();

  }

  seacrList(event:any): void {
      this.seachService.search(event.target.value)
      .pipe(
        catchError(err => {
          this.snackBar.open(err?.error?.message || err?.message)
          throw err;
        })
      )
      .subscribe((response: any) => {
        this.item = response.data
        console.log('resdata',this.item)
      })
  }

}
