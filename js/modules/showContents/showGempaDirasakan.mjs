export function showGempaDirasakan(dataGempa) {
    let cards = ``;
    for (const gempa of dataGempa) {
        cards += `<div class="card-gempa">
                    <img src="images/earthquake-${gempa.Magnitude >= 5 ? 'danger' : 'normal'}.png" alt="">
                    <div class="info-list">
                        <p><strong>Tanggal:</strong> ${gempa.Tanggal}</p>
                        <p><strong>Jam:</strong> ${gempa.Jam}</p>
                        <p><strong>Koordinat:</strong> ${gempa.Coordinates}</p>
                        <p><strong>Magnitudo:</strong> ${gempa.Magnitude}</p>
                        <p><strong>Kedalaman:</strong> ${gempa.Kedalaman}</p>
                        <p><strong>Dirasakan di:</strong> ${gempa.Dirasakan}</p>
                    </div>
                    <a href="maps.html?lat=${gempa.Lintang}&long=${gempa.Bujur}&kedalaman=${gempa.Kedalaman}&magnitude=${gempa.Magnitude}&koordinat=${gempa.Coordinates}" target="_blank">
                        <button type="button" id="btn-maps" data-lintang="${gempa.Lintang}" data-bujur="${gempa.Bujur}" data-koordinat="${gempa.Coordinates}">Lihat Maps</button>
                    </a>
                </div>`;
    }

    return `<h2>Gempa Dirasakan</h2>
                <hr>
                <div class="list-gempa">
                    ${cards}
                </div>`;
}