export function showGempaM5(dataGempa) {
    let cards = ``;
    for (const gempa of dataGempa) {
        cards += `<div class="card-gempa">
                    <img src="images/earthquake-danger.png" alt="">
                    <div class="info-list">
                        <p><strong>Tanggal:</strong> ${gempa.Tanggal}</p>
                        <p><strong>Jam:</strong> ${gempa.Jam}</p>
                        <p><strong>Koordinat:</strong> ${gempa.Coordinates}</p>
                        <p><strong>Magnitudo:</strong> ${gempa.Magnitude}</p>
                        <p><strong>Kedalaman:</strong> ${gempa.Kedalaman}</p>
                        <p><strong>Lokasi:</strong> ${gempa.Wilayah}</p>
                        <p><strong>Potensi:</strong> ${gempa.Potensi}</p>
                    </div>
                    <a href="">
                        <button type="button" id="btn-maps" data-lintang="${gempa.Lintang}" data-bujur="${gempa.Bujur}" data-koordinat="${gempa.Coordinates}">Lihat Maps</button>
                    </a>
                </div>`;
    }

    return `<h2>Gempa M 5.0+</h2>
            <hr>
            <div class="list-gempa">
                ${cards}
            </div>`;

}