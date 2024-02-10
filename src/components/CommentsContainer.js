import Comment from "./Comment";
const commentsData = [
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [
					{
						name: "Gulshan Pareek",
						text: "lorem ipsum dola rsit , construtor asit ",
						replies: [],
					},
				],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
		],
	},
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [],
	},
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [],
	},
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [],
	},
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [],
	},
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [
					{
						name: "Gulshan Pareek",
						text: "lorem ipsum dola rsit , construtor asit ",
						replies: [],
					},
					{
						name: "Gulshan Pareek",
						text: "lorem ipsum dola rsit , construtor asit ",
						replies: [
							{
								name: "Gulshan Pareek",
								text: "lorem ipsum dola rsit , construtor asit ",
								replies: [],
							},
							{
								name: "Gulshan Pareek",
								text: "lorem ipsum dola rsit , construtor asit ",
								replies: [
									{
										name: "Gulshan Pareek",
										text: "lorem ipsum dola rsit , construtor asit ",
										replies: [
											{
												name: "Gulshan Pareek",
												text: "lorem ipsum dola rsit , construtor asit ",
												replies: [],
											},
										],
									},
									{
										name: "Gulshan Pareek",
										text: "lorem ipsum dola rsit , construtor asit ",
										replies: [],
									},
								],
							},
							{
								name: "Gulshan Pareek",
								text: "lorem ipsum dola rsit , construtor asit ",
								replies: [],
							},
						],
					},
					{
						name: "Gulshan Pareek",
						text: "lorem ipsum dola rsit , construtor asit ",
						replies: [],
					},
					{
						name: "Gulshan Pareek",
						text: "lorem ipsum dola rsit , construtor asit ",
						replies: [],
					},
				],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
			{
				name: "Gulshan Pareek",
				text: "lorem ipsum dola rsit , construtor asit ",
				replies: [],
			},
		],
	},
	{
		name: "Gulshan Pareek",
		text: "lorem ipsum dola rsit , construtor asit ",
		replies: [],
	},
];

const CommentsList = ({ comments }) => {
	return comments.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			<div className="ml-5 pl-5 border border-l-black">
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));
};

const CommentsContainer = () => {
	return (
		<div className="m-4 p-2">
			<h1 className="text-2xl font-bold">Comments:</h1>
			{/* <Comment data={commentsData[0]} /> */}
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
