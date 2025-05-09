import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects = [
    {
      // title: 'assets/smartlinx.jpg',
      description: 'SmartLinx is a workforce management application where I contributed to building intuitive, responsive UI components using Angular and Angular Material. I was involved in implementing modular dashboard layouts, real-time data binding, and optimizing performance for large-scale user interactions. The project focused on delivering seamless user experiences for time tracking, attendance, and scheduling across various user roles and permission levels.',
      image: 'assets/smartlinx.png',
      link: 'https://www.smartlinx.com/'
    },
    {
      // title: 'MICADA',
      description: 'Micada is a farmer-centric dashboard built in Angular to empower agricultural data visibility and decision-making. I developed interactive data visualizations and responsive layouts for tracking crops, pricing, and logistics. The dashboard integrates with RESTful APIs to provide real-time updates, enabling farmers to monitor yield trends, weather conditions, and supply chain activity. The interface was optimized for accessibility and mobile responsiveness for rural usability.',
      image: 'assets/micada.png',
      link: 'https://micada.haryana.gov.in/'
    },
    {
      // title: 'PAC',
      description: 'PAC Worldwide is a packaging solutions platform where I contributed to the development of internal tooling and user dashboards using Angular. I helped streamline order management workflows, implemented reusable components, and worked closely with the backend team to integrate secure API communication. My focus was on improving UI consistency, load performance, and maintainability across different user-facing modules.',
      image: 'assets/pac.png',
      link: 'https://www.pac.com/'
    }
  ];
  
}
