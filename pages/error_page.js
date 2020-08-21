export default function ErrorPage({ data, query }) {
    return <h1>{data.test.length}</h1>;
}

export async function getServerSideProps(context) {

    let url = "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url)
        .then(function (response) {
            if(!response.ok) {
                throw new Error('Request Failed')
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            return [];
        });

    // Pass data to the page via props
    return { props: { data : response , query : context.query } }
}