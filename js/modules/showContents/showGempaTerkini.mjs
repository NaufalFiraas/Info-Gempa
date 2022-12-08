export function showGempaTerkini(dataGempa) {
    return `<div class="left">
                <h2>Gempa Bumi Terkini</h2>
                <div class="info-list">
                    <p><strong>Tanggal:</strong> ${dataGempa.Tanggal}</p>
                    <p><strong>Jam:</strong> ${dataGempa.Jam}</p>
                    <p><strong>Koordinat:</strong> ${dataGempa.Coordinates}</p>
                    <p><strong>Magnitude:</strong> ${dataGempa.Magnitude}</p>
                    <p><strong>Kedalaman:</strong> ${dataGempa.Kedalaman}</p>
                    <p><strong>Wilayah:</strong> ${dataGempa.Wilayah}</p>
                    <p><strong>Potensi:</strong> ${dataGempa.Potensi}</p>
                </div>
                <a href="">
                    <button type="button" id="btn-show-maps" data-lintang="${dataGempa.Lintang}" data-bujur="${dataGempa.Bujur}" data-koordinat="${dataGempa.Coordinates}">Lihat Maps</button>
                </a>
            </div>
            <div class="right">
                <img src="https://data.bmkg.go.id/DataMKG/TEWS/${dataGempa.Shakemap}" alt="">
            </div>`;
}