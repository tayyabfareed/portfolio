import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'codevty',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly destroy = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  tabs = [
    {
      title: 'Intro',
      url: '/#intro'
    },
    {
      title: 'Skills',
      url: '/#skills'
    },
    {
      title: 'About',
      url: '/#about'
    },
    {
      title: 'Projects',
      url: '/#projects'
    },
    {
      title: 'Sayings',
      url: '/#sayings'
    },
    {
      title: 'Contact',
      url: '/#contact'
    }
  ]


  skills = [
    {
      title: 'HTML5',
      description: 'Standard markup language for creating web pages.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
      icon: 'devicon-html5-plain-wordmark colored'
    },
    {
      title: 'CSS3',
      description: 'Style sheet language for describing the look and formatting of a document written in HTML.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      icon: 'devicon-css3-plain-wordmark colored'
    },
    {
      title: 'Sass',
      description: 'Syntactically Awesome Stylesheets - a CSS preprocessor scripting language.',
      url: 'https://sass-lang.com/',
      icon: 'devicon-sass-original colored'
    },
    {
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapidly building custom designs.',
      url: 'https://tailwindcss.com/',
      icon: 'devicon-tailwindcss-plain colored'
    },
    {
      title: 'JavaScript',
      description: 'High-level, interpreted programming language for web development.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      icon: 'devicon-javascript-plain colored'
    },
    {
      title: 'TypeScript',
      description: 'A superset of JavaScript that adds static types and other features.',
      url: 'https://www.typescriptlang.org/',
      icon: 'devicon-typescript-plain colored'
    },
    {
      title: 'AngularJS',
      description: 'A JavaScript-based open-source front-end web application framework.',
      url: 'https://angularjs.org/',
      icon: 'devicon-angularjs-plain colored'
    },
    {
      title: 'Ionic',
      description: 'A framework for building cross-platform mobile apps using web technologies.',
      url: 'https://ionicframework.com/',
      icon: 'devicon-ionic-original colored'
    },
    {
      title: 'PHP',
      description: 'A popular general-purpose scripting language suited for web development.',
      url: 'https://www.php.net/',
      icon: 'devicon-php-plain colored'
    },
    {
      title: 'Laravel',
      description: 'A PHP web application framework with elegant syntax.',
      url: 'https://laravel.com/',
      icon: 'devicon-laravel-plain-wordmark colored'
    },
    {
      title: 'Node.js',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      url: 'https://nodejs.org/',
      icon: 'devicon-nodejs-plain colored'
    },
    {
      title: 'NestJS',
      description: 'A progressive Node.js framework for building efficient, scalable server-side applications.',
      url: 'https://nestjs.com/',
      icon: 'devicon-nestjs-plain colored'
    },
    {
      title: 'Express',
      description: 'A minimal and flexible Node.js web application framework.',
      url: 'https://expressjs.com/',
      icon: 'devicon-express-original colored'
    },
    {
      title: 'Python',
      description: 'A versatile high-level programming language.',
      url: 'https://www.python.org/',
      icon: 'devicon-python-plain colored'
    },
    {
      title: 'Django',
      description: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.',
      url: 'https://www.djangoproject.com/',
      icon: 'devicon-django-plain colored'
    },
    {
      title: '.NET Core',
      description: 'A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications.',
      url: 'https://dotnet.microsoft.com/',
      icon: 'devicon-dotnetcore-plain colored'
    },
    {
      title: 'Firebase',
      description: 'A platform for building web and mobile applications without server-side programming.',
      url: 'https://firebase.google.com/',
      icon: 'devicon-firebase-plain-wordmark colored'
    },
    {
      title: 'MySQL',
      description: 'An open-source relational database management system.',
      url: 'https://www.mysql.com/',
      icon: 'devicon-mysql-plain colored'
    },
    {
      title: 'PostgreSQL',
      description: 'A powerful, open-source object-relational database system.',
      url: 'https://www.postgresql.org/',
      icon: 'devicon-postgresql-plain-wordmark colored"'
    },
    {
      title: 'SQLite',
      description: 'A C library that provides a lightweight, disk-based database.',
      url: 'https://www.sqlite.org/',
      icon: 'devicon-sqlite-plain colored'
    },
    {
      title: 'Sequelize',
      description: 'A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.',
      url: 'https://sequelize.org/',
      icon: 'devicon-sequelize-plain colored'
    },
    {
      title: 'Git',
      description: 'A distributed version control system for tracking changes in source code during software development.',
      url: 'https://git-scm.com/',
      icon: 'devicon-git-plain colored'
    },
    {
      title: 'Linux',
      description: 'An open-source Unix-like operating system kernel.',
      url: 'https://www.linux.org/',
      icon: 'devicon-linux-plain colored'
    },
    {
      title: 'Nginx',
      description: 'A web server that can also be used as a reverse proxy, load balancer, and HTTP cache.',
      url: 'https://www.nginx.com/',
      icon: 'devicon-nginx-original colored'
    },
    {
      title: 'Amazon Web Services',
      description: 'A comprehensive, evolving cloud computing platform provided by Amazon.',
      url: 'https://aws.amazon.com/',
      icon: 'devicon-amazonwebservices-plain-wordmark colored'
    },
    {
      title: 'Slack',
      description: 'A messaging app for teams that makes it easy to communicate and collaborate.',
      url: 'https://slack.com/',
      icon: 'devicon-slack-plain colored'
    },
    {
      title: 'SSH',
      description: 'Secure Shell - a cryptographic network protocol for operating network services securely over an unsecured network.',
      url: 'https://www.ssh.com/',
      icon: 'devicon-ssh-original-wordmark colored'
    },
    {
      title: 'Ubuntu',
      description: 'A Linux distribution based on Debian.',
      url: 'https://ubuntu.com/',
      icon: 'devicon-ubuntu-plain-wordmark colored'
    }
  ];
  ngOnInit(): void {

  }

}