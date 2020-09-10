// @flow

export const CITY_VIEW_MODAL_ID = 'cityView';
//TODO: Remove TwoWayMap and use single map
class TwoWayMap {
    constructor(map) {
       this.map = map;
       this.reverseMap = {};
       for(let key in map) {
          const value = map[key];
          this.reverseMap[value] = key;   
       }
    }
    map() { return this.map}
    get(key) { return this.map[key]; }
    revGet(key) { return this.reverseMap[key]; }
}

export const city_dict = new TwoWayMap({ 
   "Baden-Baden (Mittelbaden)":"https://jitsi.mz-mittelbaden.de",
   "Biberach":"https://jitsi.antares.net",
   "Bruchsal":"https://meet-kmz.landkreis-karlsruhe.de",
   "Calw":"https://jitsi-mzcalw.inweb.de",
   "Crailsheim":"https://jitsi.kmz-sha.de",
   "Emmendingen":"https://jitsi.kmz-emmendingen.de",
   "Enzkreis":"https://konf.mzpe.de",
   "Ettlingen":"https://meet-kmz.landkreis-karlsruhe.de",
   "Freiburg":"https://jitsi.kmzfr.de",
   "Freudenstadt":"https://meet.kmz-fds.de",
   "Göppingen":"https://meet.kmz-gp.de",
   "Heidelberg":"https://jitsi.hopp-foundation.de",
   "Heidenheim":"https://meet.medienzentrum-hdh.de",
   "Heilbronn":"https://meet.kmz-heilbronn.de",
   "Hohenlohekreis (Künzelsau und Öhringen)":"https://jitsi.kmz-hok.de",
   "Karlsruhe Land":"https://meet-kmz.landkreis-karlsruhe.de",
   "Karlsruhe Stadt":"https://jitsi.smz-karlsruhe.de",
   "Konstanz":"https://jitsi.kmz-kn.de",
   "Lörrach":"https://jitsi.kmz-loerrach.net",
   "Ludwigsburg":"https://jitsi.kmz-ludwigsburg.de",
   "Main-Tauber-Kreis":"https://jitsi.kmz-tbb.de",
   "Mannheim":"https://jitsi.hopp-foundation.de",
   "Ostalbkreis":"https://jitsi.kmz-ostalbkreis.de",
   "Pforzheim-Enzkreis":"https://konf.mzpe.de",
   "Rastatt (Mittelbaden)":"https://jitsi.mz-mittelbaden.de",
   "Ravensburg":"https://kmzrv-konferenz.de",
   "Rems-Murr-Kreis":"https://meet.kmz-rmk.de",
   "Reutlingen":"https://jitsi.kmz-reutlingen.de",
   "Rottweil":"https://videokonferenz.kmz-rw.de",
   "Schwarzwald-Baar":"https://videokonferenz.kmz-sbk.de",
   "Sigmaringen":"https://konferenz.kmz-sigmaringen.de",
   "Stuttgart":"https://jitsi.smz-stuttgart.de",
   "Tauberbischofsheim":"https://jitsi.kmz-tbb.de",
   "Tuttlingen":"https://jitsi.kmz-tuttlingen.de",
   "Zollernalbkreis":"https://jitsi.kmz-zak.de"
});