import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Profils =[
    {id: Number(1),nom:"Norman" ,image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUXJVVQD6o4fEaF41Qo1karboadfGNJ7X8zBsFiN2FhG_gR-WmcAzm_JBBzo-FYnUvUbjCCu4-1AXt1RNM77DjcWNyzBxYBPOB-K.png?r=2af'},
    {id: Number(2),nom:"linda the asian" ,image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS1CqntTEGgnQKWkKeIha97yK84VNCoaYCTb5km1aY9tbQIszIojr5CJ4DbN34RiLxMb_wfmqtMXDtfshFo7O21IjmmhS81nBUQX.png?r=3dc'},
    {id: Number(3),nom:"nathan" ,image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeWjM5vEj7qD8zXaMZzTvgtQcUgKH0nz0oibjb4yqd79RwbPajRP1MEW80N6JwloCHd582B-ZIeVEs9LiKmzugkMLs738PGBMW-obiVOSw97rFMn7ZYGNjl2WGHKip1p8o1zkXrIxdDvapr3yEg.png?r=eea'},
    {id: Number(4),nom:"Jenn" ,image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYYPjyGGwXvJeQF5AsdJ4lIqpRkh7lfScCQ7Mc7cLvGhmhCadUU2OsUiKn2sYOQdAGFUzC-s87l1gcabXiguZniXYyN2jsYNlqB4.png?r=3a2'},
    {id: Number(4),nom:"Bensin" ,image:'https://occ-0-116-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABa56W4K8IUu-tviqcHdCSWFcxKxRPGHFBfifzHCJUwQ75qCzcFwzK2cOjCfBlLyLBh48UtgbjMgzecDi15gH0ROOonVFfXL-uiN2eHh9i0RxnXRdPog9hsWO1hDiFfRTrOZAtK65bPFWKKK64MQ.png?r=f0a'},

  ];
  

}
