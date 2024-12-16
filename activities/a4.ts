async function fetchData(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    } catch (error) {
        console.log(`Failed to fetch data`);
    }
}
fetchData("http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0")
    .then(data => {
        console.log("Fetched data:", data);
    })
    .catch(error => {
        console.error("Error");
    });
