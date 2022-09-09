import React from "react";

interface Props {
	id: string,
	videoID: string,
	widthPercentage?: number
}

const DemoVideo: React.FC<Props> = (props: Props) => {


	return (
		<div id={props.id} style={{
			maxWidth: `${props.widthPercentage || 100}%`
		}}>
			
		</div>
	)
}

export default DemoVideo