$(document).ready(function () {

    var image = $('.discover-movie-poster');

    for (var i = 0; i < image.length; i++) {
        var vibrant = new Vibrant(image[i]);
        var swatches = vibrant.swatches();
        // console.log(swatches);
        for (var swatch in swatches)
            if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                // console.log(swatch, swatches[swatch].getHex());

                var vP = 0,
                    dvP = 0,
                    lvP = 0,
                    mP = 0,
                    dmP = 0,
                    lmP = 0;

        if (typeof swatches.Vibrant != 'undefined') {
            vP = swatches.Vibrant.getPopulation();
        }

        if (typeof swatches.DarkVibrant != 'undefined') {
            dvP = swatches.DarkVibrant.getPopulation();
        }

        if (typeof swatches.LightVibrant != 'undefined') {
            lvP = swatches.LightVibrant.getPopulation();
        }

        if (typeof swatches.Muted != 'undefined') {
            mP = swatches.Muted.getPopulation();
        }

        if (typeof swatches.DarkMuted != 'undefined') {
            dmP = swatches.DarkMuted.getPopulation();
        }

        if (typeof swatches.LightMuted != 'undefined') {
            lmP = swatches.LightMuted.getPopulation();
        }

        var max_populated_color = Math.max(vP, dvP, lvP, mP, dmP, lmP);
        var cur = image.parent()[i];

        for (var swatch in swatches) {
            if (typeof swatches[swatch] != 'undefined') {
                if (swatches[swatch].getPopulation() === max_populated_color) {
                    // console.log("Max Populated Color: " + swatches[swatch].getHex());
                    cur.style.background = swatches[swatch].getHex();
                }
            }
        }

    }

});