import React,  {useEffect, useState} from 'react';
import axios from 'axios'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();



export default function News() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);




    useEffect(() => {
        setLoading(true)
        axios.get('http://hn.algolia.com/api/v1/search?query=react')
            .then(({ data: { hits } }) => {
                setArticles(hits)
            }).catch(err => {
                setError(err.message)
            }).finally(() => {
                setLoading(false)
            })
        
           // при быстром переходе на новую вкладку этот запрос нужно отменять, что б избежать утечьки памяти
        // отменяем возвращая функцию, которая выполняется перед след.  useEffect и исп. как аналог componentWillUnmaunt   }, [])
        return () => {
            axios.get('http://hn.algolia.com/api/v1/search?query=react', {
                cancelToken: source.token
                // из доков axios вкладка "cancellation"
})
        }
    }, [])
        
     
        
        return (
            <div>
                {loading && <h1>loading...</h1>}
                <ul>
                    {articles.length > 0 && articles.map(({ objectID, title, url }) => (
                        <li key={objectID}>
                            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                        </li>
                    ))}
                </ul>
            </div>)
    }



//  export default class News extends React.Component{
//      state = {
//          articles: [],
//          loading: false
//      };
//  
//      componentDidMount() {
//          this.setState({
//             loading: true
//         })
//          axios.get('http://hn.algolia.com/api/v1/search?query=react')
//              .then(({data: {hits}})=> {
//                  this.setState({
//                  articles: hits
//              })})
//              .catch(err => console.log(err)).finally(() => {
//                  this.setState({
//                      loading: false
//                  })
//              })
//      }
//  
//      render() {
//          return (
//              <div> 
//                 {this.state.loading && <h1>loading...</h1>}
//                 <ul>
//                     {this.state.articles.length >0 && this.state.articles.map(({ objectID, title, url }) => (
//                         <li key={objectID}>
//                             <a href={url} target="_blank" rel="noopener noreferrer">{ title}</a>
//                         </li>
//                     ))}
//                  </ul>
//                  </div>
//          
//      )
//  } 
// }