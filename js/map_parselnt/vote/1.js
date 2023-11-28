const FID = 'TM8uOr';
const getJinData = async () => {
    let res = [];
    let count = 50;
    let next = 0;
  
    while (count == 50) {
        let url = `https://jinshuju.net/api/v1/forms/${FID}/entries`;
        if (next) {
            url = `${url}?next=${next}`;
        }

        const rawdata = await fetch(url, {
            headers: {} // 'headers' is the correct property name
        });
        const data = await rawdata.json();
        count = data.count;
        res = res.concat(data.data);
    }
}
