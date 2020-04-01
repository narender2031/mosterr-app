import * as React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

const CardList = (props) => {
	const monsters = props.monsters.filter((monster) => monster.name.toLowerCase().includes(props.searchText));

	return (
		<div className="card-list">
			{monsters && monsters.length > 0 ? (
				monsters.map((monster) => {
					return <Card key={monster.id} monster={monster} />;
				})
			) : null}
		</div>
	);
};

export default CardList;
