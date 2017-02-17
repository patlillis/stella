import names from '../scripts/virtual_sky/lang/en.json';
import boundaries from '../scripts/virtual_sky/boundaries.json';
import slug from 'slug';

// Calculate midpoints for each constellation.
var midpoints = {};
var b = boundaries.boundaries; // An array of constellations.
for (var index = 0; index < b.length; index++) {
    var c = b[index];
    var name = c[0].toLowerCase().substring(0, 3);
    var ra = [];
    var dec = [];
    for (var p = 1; p < c.length; p += 2) {
        ra.push(c[p]);
        dec.push(c[p + 1]);
    }

    var raAvg = ra.reduce((a, b) => a + b, 0) / ra.length;
    var decAvg = dec.reduce((a, b) => a + b, 0) / dec.length;

    if (midpoints.name) {
        midpoints.name.ra = (midpoints.name.ra + raAvg) / 2;
        midpoints.name.dec = (midpoints.name.dec + decAvg) / 2;
    }
    else {
        midpoints[name] = {
            ra: raAvg,
            dec: decAvg
        };
    }
}

// Put together data in an intelligible format.
var constellations = [];
for (var c of Object.entries(names.constellations)) {
    var latin = c[0].toLowerCase();
    constellations.push({
        latin: latin,
        name: c[1],
        id: slug(c[1]).toLowerCase(),
        point: midpoints[latin]
    });
}

export default constellations;