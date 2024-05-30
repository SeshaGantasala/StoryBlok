
import { FunctionComponent, useEffect, useState } from 'react'
import { useFieldPlugin } from '@storyblok/field-plugin/react'

const InfoPlugin: FunctionComponent = () => {
  const { type, data, actions } = useFieldPlugin({
    validateContent: (content: unknown) => ({
      content: typeof content === 'object' ? content : {},
    }),
  })
  const [productData, setProductData] = useState({id: 0, name: null });

    useEffect(() => {
        // fetch('http://stage-restapi.360training.com:3737/search/ext/resources/store/21701/productview/basicSummary/byIds?id=367704')
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
          .then(response => response.json())
          .then(data => {
            setProductData({id: data.id, name: data.name});
            
            actions?.setContent({id: data.id, name: data.name})
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      }, [actions]); 

  if (type !== 'loaded') {
    return null
  }


  return (
    <div>
    
      <div className="container">
      <p>
         <strong>Duration:</strong> {productData?.name} hours
           <strong>price:</strong> {productData?.id}
          </p>
      </div>
    </div>
  )
}

export default InfoPlugin
