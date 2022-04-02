import { useQuery, UseQueryResult } from "react-query"
import { FunctionComponent, ReactNode } from "react"

interface FetchResourceProps<T = {}> {
	result?: T
	children:
		| ((props: UseQueryResult) => ReactNode)
		| ((props: UseQueryResult) => ReactNode[])
	queryId: string | [string, string]
	query: string
}

const FetchResource: FunctionComponent<FetchResourceProps> =
	(props) => { 
		const getResource = async (url) =>
			await fetch(url)
				.then((res) => res.json())
				.then((data) => data)

		const queryOptions = useQuery(
			props.queryId,
			async () => await getResource(props.query)
		)
		return <>{props.children({ ...queryOptions })}</>
	}

export default FetchResource
