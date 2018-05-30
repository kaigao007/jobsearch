import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  jobs: any[];

  constructor(private http: Http) {

  }
  // "?id=234134" or "?job=14412"
  getJobsFromTradedesk(keyword: string, location: string) {
    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e");

    return this.http.get("https://imi.rhonda.ai/api/job" + "?search=" + keyword + location + "&page_size=80", { headers: myHeaders })
      .map(
        (response: Response) => {
          const data = response.json().results;
          // console.log(data);
          this.jobs = data;
          return data;
        }
      )
      .catch(
        (error: Response) => {

          // console.log(error);
          return Observable.throw(error);
        }
      )
  }
  getJobs() {
    return this.jobs;
  }

  getJob(id: number) {
    return this.jobs.find((job) => job.id == id);
  }

  getJobWithId(id: number) {
    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e");

    return new Promise((resolve, reject) => {
      this.http.get("https://imi.rhonda.ai/api/job" + "/?id=" + id, { headers: myHeaders }).map(res => res.json()).subscribe(
        data => {
          resolve(data.results[0]);
        },
        err => {
          reject(err);
        }
      )
    })
  }

  getStaticData() {
    return {
      "count": 3,
      "next": {
        "page": null,
        "page_size": 20
      },
      "previous": {
        "page": null,
        "page_size": 20
      },
      "results": [
        {
          "id": 7260,
          "title": "Service Delivery Team Lead",
          "description": "<p><b><span>JOB SUMMARY:</span></b><span> The Service Delivery Team Lead will assist<br>the Service Desk Manager on day to day operation which include service<br>management initiatives and technical support duties including responding to<br>escalations and providing end user support as required. The Service delivery<br>team lead will provide support to the team in a procedural and technical<br>capacity.</span></p><p><span><br></span></p><p></p><p><b><span>DESCRIPTION OF RESPONSIBILITIES: </span></b></p><p><b><span></span></b></p><p><b><span>Technical</span></b></p><p><span>Provide technical support with desktop and server infrastructure technologies</span></p><p><span>Respond to requests for technical&nbsp;assistance by phone, email and/or using a help desk management system and follow to resolution</span></p><p><span>Serve as an internal escalation point </span></p><p><span>Provide basic support for Network equipment (switches, firewalls)</span></p><p><span>Participate and/or lead project based work as required</span></p><p><span>Install new / rebuild existing servers and configure hardware, peripherals, services, settings, directories,<br>storage, etc. in accordance with standards and project/operational requirements.</span></p><p><span>Administer and support Active Directory, Exchange, Windows servers, DNS, hosted email &amp; VM.</span></p><p><span>Maintain and create any appropriate documentation</span></p><p><b><span>Service Management</span></b></p><p><span>Participate and own process improvement initiatives as required</span></p><p><span>Ability to train technical teams effectively and produce support materials</span></p><p><span>Documenting existing service delivery models and training aids.</span></p><p><span>Producing trend analysis and monitoring service levels</span></p><p><span>Reviewing day to day operations and recommending improvements</span></p><p><span>Respond to client escalations and root cause analysis</span></p><p><span>Development of procedures with internal stakeholders.</span></p><p><span></span></p><p><span>Be comfortable working in a secure production environment with appropriate procedures and policies for a SaaS</span></p><p><span>Manage projects and assignments from Management with minimal supervision.</span></p><p><span>Hands-on experience with installation of cable, operating systems (servers), and software systems</span></p><p><span>Ability to promote IT best practices in infrastructure management and user support</span></p><p><span>Other duties as required</span></p><p></p><p><b><span><br></span></b></p><p><b><span>QUALIFICATIONS:</span></b></p><p><span>3+ years providing support for Windows Operating System</span></p><p><span>3+ years troubleshooting computer hardware and component.</span></p><p><span>3+ years Windows administration experience.</span></p><p><span>3+ years Windows server 2008, 2012</span></p><p><span>3+ years’ experience managing VMWare (ESXi)</span></p><p><span>Working knowledge of VPN and networking.</span></p><p><span>Knowledge of MS SQL and reporting</span></p><p><span>Knowledge of NAS/SAN.</span></p><p><span>Microsoft, VMWare, and/or Cisco certification(s) will be a definite asset</span></p><p><b><span>Service Management</span></b></p><p><span>Understanding of foundational concepts IT Service Management</span></p><p><span>Analytical and problem-solving skills</span></p><p><span>Experience producing documentation and conducting training session with service delivery teams.</span></p><p><span>Documenting service delivery models and reviewing </span></p><p><b><span>Other<br>Assets</span></b><span></span></p><p><span>Strong customer service experience</span></p><p><span>Experience leading teams</span></p><p><span>Be adaptable to dynamic and fast paced environment</span></p><p><span>Excellent time management and communication skills</span></p><p><span>Good organizational and documentation skills.</span></p><p><span>Always maintain a high degree of professionalism, courteousness, and friendliness</span></p><p><span>Technical sales experience</span></p><p><span>Experience in a multi-site environment</span></p><p><span>Experience with Microsoft Azure and Office 365, hosted email</span></p><p><span>Experience working with excel and producing reports.</span></p><p><span>Experience with server clusters</span></p><p><span>ITIL Certification and/or Service Management</span></p><p><span>Certifications from software\\hardware vendors</span></p><p><b><span>Working<br>Conditions</span></b><span></span></p><p><span>Travel within the NCR as needed</span></p><p><span>Ability to physically inspect equipment</span></p><p><span>Able to lift at least 50 lbs</span></p><p><span>On call and overtime as required</span></p><p></p><p></p><p><span></span></p>",
          "published": "2018-04-23",
          "created": "2018-04-23T18:31:55.988809Z",
          "location": 41069,
          "pay_rate_type": "negotiable",
          "pay_rate": "0.0000000000",
          "pay_rate_min": "0.0000000000",
          "pay_rate_max": "0.0000000000",
          "currency": "CAD",
          "from_hour": null,
          "to_hour": null,
          "from_day": null,
          "to_day": null,
          "start_date": "2018-04-23",
          "end_date": "2018-04-23",
          "expired_date": "2018-05-11",
          "status": "active",
          "extra_status": "future",
          "categories": [
            29
          ],
          "types": [
            4
          ],
          "images": [],
          "employer": {
            "id": 70,
            "username": "marley2",
            "first_name": "Marley",
            "last_name": "MacGibbon",
            "email": "marley@tradedesk.io",
            "is_active": true,
            "date_joined": "2016-03-15T20:33:30Z",
            "avatar": "//app.tradedesk.io/static/images/recruiter/avatar.jpg",
            "full_name": "Marley MacGibbon"
          },
          "job_types": [
            {
              "status": "active",
              "description": "",
              "creator": 1,
              "created": "2016-01-26T08:28:19Z",
              "title": "Full Time",
              "id": 4
            }
          ],
          "job_categories": [
            {
              "status": "active",
              "description": "The study or use of systems (especially computers and telecommunications) for storing, retrieving, and sending information.",
              "creator": 632,
              "created": "2016-10-24T22:31:49.200Z",
              "title": "Information Technology",
              "id": 29
            }
          ],
          "job_location": "Ottawa, Ontario, Canada",
          "job_poster": 70,
          "company": null,
          "contact_name": "IMI Employer",
          "contact_company_name": "",
          "contact_email": "marley@tradedesk.io",
          "contact_website": "",
          "is_required_resume": false,
          "is_required_certificate": false,
          "is_required_health_check": false,
          "is_required_criminal_check": false,
          "is_required_driving_license_check": false,
          "required_document_description": "",
          "number_of_position": 1,
          "screening_url": "https://app.tradedesk.io/rhondascreening/f21f2b3d-1e51-49db-ac52-276cc5b9644c/?first_name=&last_name=&phone_number=&email=",
          "is_owner": false,
          "has_submitted": false,
          "is_favorite": false,
          "has_applied": false,
          "is_managable": true,
          "applied_job": 0
        },
        {
          "id": 7259,
          "title": "Service Desk Technician – Level 3",
          "description": "<p><b style=\"color: rgb(70, 71, 70);\">JOB SUMMARY:&nbsp;&nbsp;</b><span style=\"color: rgb(70, 71, 70);\">The role will require an individual with organizational skills and strong time&nbsp;</span><span style=\"color: rgb(70, 71, 70);\">management and communication capabilities. The individual will have&nbsp;</span><span style=\"color: rgb(70, 71, 70);\">customer-facing responsibilities and be experienced in the support and delivery&nbsp;</span><span style=\"color: rgb(70, 71, 70);\">of proposed solutions.&nbsp; This position will be assisting/training/growing&nbsp;</span><span style=\"color: rgb(70, 71, 70);\">the service team as well as assisting in our customers day to day issues. The&nbsp;</span><span style=\"color: rgb(70, 71, 70);\">individual will also be responsible for pro-actively reviewing customer tickets&nbsp;</span><span style=\"color: rgb(70, 71, 70);\">and infrastructure to ensure customer needs are being met.</span></p><p><span style=\"color: rgb(70, 71, 70);\"><br></span></p><p><span></span></p><p><b><span>DESCRIPTION OF RESPONSIBILITIES: </span></b></p><p><span>Support Level One and Level Two Service Desk Technicians in their day to day roles</span></p><p><span>Provide technical training to staff to help enhance their skillset</span></p><p><span>Review teams’ tickets pro-actively and provide assistance as needed to ensure tickets are getting handled in an efficient manner</span></p><p><span>Review customer environments for trends / ongoing issues and provide suggestions / implement changes to resolve them</span></p><p><span>Work on escalated / more complex issues that customers are experiencing</span></p><p><span>Delegate tasks amongst team to ensure efficient handling of customer issues</span></p><p><span>Review client documentation to ensure accuracy</span></p><p><span>Assist in on-boarding of new clients</span></p><p><span>Assist in creation / management of policies and procedures</span></p><p><span></span></p><p><span></span></p><p><b><span>QUALIFICATIONS:</span></b></p><p><span>Vendor Certifications (MCSE, MOS, MCSA, A+ etc.) considered an asset;</span></p><p class=\"MsoNoSpacing\"><span>Minimum of five years’ experience with personal computer, server,<br>networks, hardware and software configuration, installation and<br>troubleshooting;</span></p><p class=\"MsoNoSpacing\"><span>2 years’ experience in a leadership position </span></p><p class=\"MsoNoSpacing\"><span>Strong Windows Operating System knowledge and troubleshooting skills;</span></p><p class=\"MsoNoSpacing\"><span>Knowledge of troubleshooting skills in email and different email clients;</span></p><p><span>Strong experience with data management, backup and archival processes, and system performance monitoring and tuning;</span></p><p><span>Knowledge of network services such as DNS, NIS, LDAP, Web, Email, FTP, Firewalls, VPN's, remote management, and network monitoring;</span></p><p><span>Knowledge of networking technologies such as routing and switching;</span></p><p><span>Knowledge of Exchange 2007/2010/2013</span></p><p><span>Knowledge of Active directory, Windows 2008/2012 server and advanced server;</span></p><p><span>Knowledge in cloud platforms such as Office 365 and Microsoft Azure;</span></p><p class=\"MsoNoSpacing\"><span>Methodical and efficient problem analysis and resolution skills;</span></p><p class=\"MsoNoSpacing\"><span>Candidate must have professional written and verbal communication<br>skills;</span></p><p class=\"MsoNoSpacing\"><span>Candidate must be customer oriented, self-motivated, ambitious and a dedicated team player;</span></p><p><span>Ability to organize, prioritize, and work in a multi-tasking, high pressure environment;</span></p><p><span>Strong communication, presentation, and client management skills required;</span></p><p><span><br></span></p><p><span><br><br><!--StartFragment--><span class=\"spellingerror\" style=\"color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);\"><span style=\"color: rgb(81, 81, 81);\"><i>CareWorx</i></span></span><span class=\"normaltextrun\" style=\"color: rgb(51, 51, 51);background-color: rgb(255, 255, 255);\"><span style=\"color: rgb(81, 81, 81);\"><i>&nbsp;welcomes and encourages applications from people with<br>disabilities. Accommodations are available on request for candidates taking<br>part in all aspects of the selection process</i></span></span><br><br></span></p>",
          "published": "2018-04-23",
          "created": "2018-04-23T18:07:42.972306Z",
          "location": 41069,
          "pay_rate_type": "negotiable",
          "pay_rate": "0.0000000000",
          "pay_rate_min": "0.0000000000",
          "pay_rate_max": "0.0000000000",
          "currency": "CAD",
          "from_hour": null,
          "to_hour": null,
          "from_day": null,
          "to_day": null,
          "start_date": "2018-04-23",
          "end_date": "2018-04-23",
          "expired_date": "2018-05-11",
          "status": "active",
          "extra_status": "future",
          "categories": [
            29
          ],
          "types": [
            4
          ],
          "images": [],
          "employer": {
            "id": 70,
            "username": "marley2",
            "first_name": "Marley",
            "last_name": "MacGibbon",
            "email": "marley@tradedesk.io",
            "is_active": true,
            "date_joined": "2016-03-15T20:33:30Z",
            "avatar": "//app.tradedesk.io/static/images/recruiter/avatar.jpg",
            "full_name": "Marley MacGibbon"
          },
          "job_types": [
            {
              "status": "active",
              "description": "",
              "creator": 1,
              "created": "2016-01-26T08:28:19Z",
              "title": "Full Time",
              "id": 4
            }
          ],
          "job_categories": [
            {
              "status": "active",
              "description": "The study or use of systems (especially computers and telecommunications) for storing, retrieving, and sending information.",
              "creator": 632,
              "created": "2016-10-24T22:31:49.200Z",
              "title": "Information Technology",
              "id": 29
            }
          ],
          "job_location": "Ottawa, Ontario, Canada",
          "job_poster": 70,
          "company": null,
          "contact_name": "Marley MacGibbon",
          "contact_company_name": "",
          "contact_email": "marley@tradedesk.io",
          "contact_website": "",
          "is_required_resume": false,
          "is_required_certificate": false,
          "is_required_health_check": false,
          "is_required_criminal_check": false,
          "is_required_driving_license_check": false,
          "required_document_description": "",
          "number_of_position": 1,
          "screening_url": "",
          "is_owner": false,
          "has_submitted": false,
          "is_favorite": false,
          "has_applied": false,
          "is_managable": true,
          "applied_job": 0
        },
        {
          "id": 7258,
          "title": "L2 – System Administrator",
          "description": "<p><b style=\"color: rgb(70, 71, 70);\">JOB SUMMARY:</b><span style=\"color: rgb(70, 71, 70);\">&nbsp;&nbsp;</span><br></p><p><span>The role will require an individual with strong technical and organizational skills.<br>The individual will have customer-facing responsibilities and be experienced in<br>the support and delivery of proposed solutions.&nbsp; Further, the candidate<br>will ensure high quality service delivery clients. </span></p><p><span></span></p><p><span>Due to the nature of support; evening shift and on-call rotation is required. </span></p><p><b><span>DESCRIPTION OF RESPONSIBILITIES: </span></b></p><p><b><span><br></span></b></p><p></p><p>Serve as an escalation point for Service Desk team members</p><p><span>Identify and learn software and hardware used and supported by the organization.</span></p><p><span>Perform remote fixes at the desktop and server level, including installing and upgrading software, installing hardware, implementing file backups, and configuring systems and applications.</span></p><p><span>Perform post-resolution follow-ups to help requests.</span></p><p><span>Troubleshooting and documentation to knowledge management systems.</span></p><p><span>Resolving network and server related issues, including SQL server, Exchange 2003/2007/2010/2013, and Windows 2003/2008/2012 (both on premise and cloud installations)</span></p><p><span>Assist our clients with troubleshooting their networks/servers via phone, email and chat</span></p><p><span>Address mission critical issues on a daily basis to ensure the smooth operation of different technologies in use</span></p><p>Document all customer interaction within CRM</p><p><br></p><p><b><span>QUALIFICATIONS:</span></b></p><p></p><p>Strong analytical skills</p><p><span style=\"color: black;\">Bi-lingual would be an asset</span></p><p><span style=\"color: black;\">ITIL an asset</span></p><p></p><p><span>Vendor Certifications (MCP, CCNA, CNE, CCSE, etc.) considered a plus</span></p><p><span>Knowledge of networking technologies such as routing and switching;</span></p><p><span>Experience with data management, backup and archival processes, and system performance monitoring and tuning;</span></p><p><span>In-depth knowledge of network services such as DNS, LDAP, Web, Email, FTP, Firewalls, VPN's, remote management, and network monitoring;</span></p><p><span>In-depth knowledge of MS Windows 2003/2008/2012 architectures;</span></p><p><span>In-depth knowledge of Active directory;</span></p><p><span>In-depth knowledge of MS Exchange / SQL Servers;</span></p><p><span>In-depth knowledge of remote access technologies (TS, VPN, VNC, etc.);</span></p><p><span>Experience in virtual environments such as VMware, Citrix and Hyper-V; </span></p><p><span>Infrastructure as a service experience considered a plus;</span></p><p><span>Ability to organize, prioritize, and work in a multi-tasking, high pressure environment;</span></p><p><span>Strong communication, presentation, and client management skills required;</span></p><p><span><br></span></p><p><span></span></p><p><span class=\"spellingerror\"><span style=\"color: #515151;\"><i>CareWorx</i></span></span><span class=\"normaltextrun\"><span style=\"color: #515151;\"><i>&nbsp;welcomes and encourages applications from people with<br>disabilities. Accommodations are available on request for candidates taking<br>part in all aspects of the selection process</i></span></span></p><p><span><br></span></p><p></p><p></p><p></p><p><b><span></span></b></p><p><b><span></span></b></p>",
          "published": "2018-04-23",
          "created": "2018-04-23T17:49:04.479292Z",
          "location": 41069,
          "pay_rate_type": "negotiable",
          "pay_rate": "0.0000000000",
          "pay_rate_min": "0.0000000000",
          "pay_rate_max": "0.0000000000",
          "currency": "CAD",
          "from_hour": null,
          "to_hour": null,
          "from_day": null,
          "to_day": null,
          "start_date": "2018-04-23",
          "end_date": "2018-04-23",
          "expired_date": "2018-05-11",
          "status": "active",
          "extra_status": "future",
          "categories": [
            29
          ],
          "types": [
            4
          ],
          "images": [],
          "employer": {
            "id": 70,
            "username": "marley2",
            "first_name": "Marley",
            "last_name": "MacGibbon",
            "email": "marley@tradedesk.io",
            "is_active": true,
            "date_joined": "2016-03-15T20:33:30Z",
            "avatar": "//app.tradedesk.io/static/images/recruiter/avatar.jpg",
            "full_name": "Marley MacGibbon"
          },
          "job_types": [
            {
              "status": "active",
              "description": "",
              "creator": 1,
              "created": "2016-01-26T08:28:19Z",
              "title": "Full Time",
              "id": 4
            }
          ],
          "job_categories": [
            {
              "status": "active",
              "description": "The study or use of systems (especially computers and telecommunications) for storing, retrieving, and sending information.",
              "creator": 632,
              "created": "2016-10-24T22:31:49.200Z",
              "title": "Information Technology",
              "id": 29
            }
          ],
          "job_location": "Ottawa, Ontario, Canada",
          "job_poster": 70,
          "company": null,
          "contact_name": "Admin",
          "contact_company_name": "",
          "contact_email": "marley@tradedesk.io",
          "contact_website": "",
          "is_required_resume": false,
          "is_required_certificate": false,
          "is_required_health_check": false,
          "is_required_criminal_check": false,
          "is_required_driving_license_check": false,
          "required_document_description": "",
          "number_of_position": 1,
          "screening_url": "https://app.tradedesk.io/rhondascreening/cd56867a-88aa-4907-9d8e-7790b8a3d47e/?first_name=&last_name=&phone_number=&email=",
          "is_owner": false,
          "has_submitted": false,
          "is_favorite": false,
          "has_applied": false,
          "is_managable": true,
          "applied_job": 0
        }
      ],
      "expired_job_count": 0,
      "new_job_count": 0
    }
  }

}
