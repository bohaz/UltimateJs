function resolutionName(width, height) {
   if (width >= 7680 && height >= 4320) {
      return "8K";
   } else if (width >= 3840 && height >= 2160) {
      return "4K";
   } else if (width >= 2560 && height >= 1440) {
      return "WQHD";
   } else if (width >= 1928 && height >= 1080) {
      return "FHD";
   } else if (width >= 1280 && height >= 720) {
      return "HD";
   } else {
      return false;
   }
      

}

let Name = resolutionName(1366, 768);
console.log(Name);