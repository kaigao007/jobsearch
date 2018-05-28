import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'choseUrl'
})
export class ChoseUrlPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    // console.log(value);

    const mechConveyorInstalArray = [
      "https://www.youtube.com/embed/7KzrdL3KoaU?autoplay=1",
      "https://www.youtube.com/embed/CP36bknNZKg?autoplay=1",
      "https://www.youtube.com/embed/Z-3gvYMLcv8?autoplay=1"
    ];

    const journeymanElectricianArray = [
      "https://www.youtube.com/embed/72V3gvnt7uc?autoplay=1",
      "https://www.youtube.com/embed/0DhXq4LZC8o?autoplay=1",
      "https://www.youtube.com/embed/PLDmDIqIrjY?autoplay=1"
    ];

    const recruiterArray = [
      "https://www.youtube.com/embed/oDwiWxl-9sw?autoplay=1",
      "https://www.youtube.com/embed/D3R_ajjI1-I?autoplay=1"
    ];

    switch (value) {
      case "*Entry Level Local Installer":
      case "Entry Level Local Installer":
      case "Entry Level Conveyor Installer":
      case "Mechanical Installer":
      case "Mechanical Conveyor Installer": {
        let randomNumber = Math.floor(Math.random() * mechConveyorInstalArray.length);
        // console.log(randomNumber);
        return mechConveyorInstalArray[randomNumber];
      }

      case "Electrician":
      case "Journeyman Electrician": {
        let randomNumber = Math.floor(Math.random() * journeymanElectricianArray.length);
        // console.log(randomNumber);
        return journeymanElectricianArray[randomNumber];
      }

      case "Mechanical Jobsite Supervisor":
      case "Site Admin": {
        return "https://media.giphy.com/media/2YtTdoSEl4m4/giphy.mp4";

      }
      case "Project Manager - Warehouse Material Handling Systems":{
        return "https://media.giphy.com/media/xUA7b8xA1hqGNVUFOg/giphy.mp4";

      }

      case "Recruiter":{
        let randomNumber = Math.floor(Math.random() * recruiterArray.length);
        // console.log(randomNumber);
        return recruiterArray[randomNumber];
      }
      case "General Labor Construction":{
        return "https://www.youtube.com/embed/catTuOOU0MU?autoplay=1"
      }
      case "Customer Support Associate":{
        return "https://media.giphy.com/media/1ykSdh7z1crRK/giphy.mp4"
      }
      case "Racking Installer":{
        return "https://www.youtube.com/embed/m-PuFqW17-0?autoplay=1"
      }

      default: {
        return "https://www.youtube.com/embed/4f49y5cY8QI?autoplay=1";
        // break;
      }

    }



  }

}
