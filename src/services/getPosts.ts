
import { MyResponseTypeTms } from "../types/responseType"

// export const getPostsTms = async (limit: number, offset: number,) => {
// 	const result = await fetch(`https://studapi.teachmeskills.by/blog/posts/?offset=${offset}&limit=${limit}`)
// 	const res = await result.json()
// 	console.log(res)
// 	const newRes = await (res: MyResponseTypeTms)=> {
// 	return res.results.map(item => {
// 		return {
// 			...item,
// 			likes: Math.round(Math.random() * (1000)),
// 			dislikes: Math.round(Math.random() * 100),
// 			isDisliked: false,
// 			isFavorite: false,
// 			isPopular: Math.random() < 0.5,
// 		}
// 	})
// }
// return newRes
// }


export const getPostsTms =(limit:number, offset:number) =>{
	return fetch(`https://studapi.teachmeskills.by/blog/posts/?offset=${offset}&limit=${limit}`)
				.then(response=>response.json())
				.then((result:MyResponseTypeTms)=>{
					return result
				})
}