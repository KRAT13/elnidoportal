import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true
})
export class LogoComponent implements OnInit {
  @Input() logoName!: string;

  selected: any = null;
  logos: any = [
    { name: 'Angular', value: 'angular', image: 'assets/logos/angular.svg' },
    { name: 'Ant Design', value: 'antdesign', image: 'assets/logos/antdesign.svg' },
    { name: 'Api', value: 'api', image: 'assets/logos/api.svg' },
    { name: 'Bootstrap', value: 'bootstrap', image: 'assets/logos/bootstrap.svg' },
    { name: 'CodeIgniter', value: 'codeigniter', image: 'assets/logos/codeigniter.svg' },
    { name: 'Docker', value: 'docker', image: 'assets/logos/docker.svg' },
    { name: 'Github', value: 'github', image: 'assets/logos/github.svg' },
    { name: 'Gitlab', value: 'gitlab', image: 'assets/logos/gitlab.svg' },
    { name: 'Jasper Report', value: 'jasper', image: 'assets/logos/jasper.svg' },
    { name: 'jQuery', value: 'jquery', image: 'assets/logos/jquery.svg' },
    { name: 'JavaScript', value: 'js', image: 'assets/logos/js.svg' },
    { name: 'MariaDB', value: 'mariadb', image: 'assets/logos/mariadb.svg' },
    { name: 'Material UI', value: 'materialui', image: 'assets/logos/materialui.svg' },
    { name: 'MSSql', value: 'mssql', image: 'assets/logos/mssql.svg' },
    { name: 'MySql', value: 'mysql', image: 'assets/logos/mysql.svg' },
    { name: 'NestJs', value: 'nestjs', image: 'assets/logos/nestjs.svg' },
    { name: 'NodeJs', value: 'nodejs', image: 'assets/logos/nodejs.svg' },
    { name: 'Php', value: 'php', image: 'assets/logos/php.svg' },
    { name: 'PS', value: 'ps', image: 'assets/logos/ps.svg' },
    { name: 'Spring', value: 'spring', image: 'assets/logos/spring.svg' },
    { name: 'Symfony', value: 'symfony', image: 'assets/logos/symfony.svg' },
    { name: 'Tailwind CSS', value: 'tailwind', image: 'assets/logos/tailwindcss.svg' },
    { name: 'Website', value: 'web', image: 'assets/logos/web.svg' },
    { name: 'FB Account', value: 'fb', image: '/assets/logos/fb.svg' },
    { name: 'Messenger', value: 'messenger', image: '/assets/logos/messenger.svg' },
  ];

  ngOnInit(): void {
    const temp: any =  this.logos.filter((logo: any) => logo.value === this.logoName);

    if (temp) {
      this.selected = temp[0];
    }
    console.log('Image: this.selected');
  }

}
