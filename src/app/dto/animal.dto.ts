import { ConservationStatus } from "./conservation-status.dto";
import { Continent } from "./continent.dto";


export class Animal { 
    constructor(
        public id: number,    
        public species: string,   
        public imageUrl: string,    
        public continents: Continent[],    
        public averageLifespan: number,    
        public averageWeight: number,    
        public averageHeight: number,    
        public conservationStatus: ConservationStatus,    
        public domesticated: boolean,  
    ) {  
    }
}