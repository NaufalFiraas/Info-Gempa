export default function (method, param, success, error, loading) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 3 || xhr.readyState === 2 || xhr.readyState === 1) {
            loading();
        }

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.response);
                const dataGempa = result.Infogempa.gempa;
                success(dataGempa);
            } else {
                error(`Terjadi kesalahan ${xhr.status}`);
            }
        }
    }

    xhr.open(method, `https://data.bmkg.go.id/DataMKG/TEWS/${param}.json`);
    xhr.send();
}