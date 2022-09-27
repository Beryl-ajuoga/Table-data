import common from "@/common";
import http from common

class TableDataService {
    getAll(params) {
      return http.get("/tutorials", { params });
    }
  
  }
  
  export default new TablelDataService();