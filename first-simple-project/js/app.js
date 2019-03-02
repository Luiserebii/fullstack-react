class PokemonComponent extends React.Component {

	render() {

			return (

				<div className="pokemon-component">
					<h3 className="name">{Seed.smogonBWSets[0].name}</h3>
					<img src={Seed.smogonBWSets[0].imgurl}/>
					<span>Typing: {Seed.smogonBWSets[0].typing.type1}/{Seed.smogonBWSets[0].typing.type2}</span><br />
					<span>Stats: </span>
						<ol>
							<li>HP: {Seed.smogonBWSets[0].stats.hp}</li>
							<li>Attack: {Seed.smogonBWSets[0].stats.atk}</li>
							<li>Defense: {Seed.smogonBWSets[0].stats.def}</li>
							<li>Sp. Atk: {Seed.smogonBWSets[0].stats.spa}</li>
							<li>Sp. Def: {Seed.smogonBWSets[0].stats.spd}</li>
							<li>Speed: {Seed.smogonBWSets[0].stats.spe}</li>
						</ol>
					<span>Item: {Seed.smogonBWSets[0].item}</span><br />
					<span>Ability: {Seed.smogonBWSets[0].ability}</span><br />
					<span>Nature: {Seed.smogonBWSets[0].nature}</span><br />
					<span>EVs: {/*Seed.smogonBWSets[0].evs*/}</span>
					<span>Moveset: </span>
						<ol>
							<li>{Seed.smogonBWSets[0].moveset[0]}</li>
							<li>{Seed.smogonBWSets[0].moveset[1]}</li>
							<li>{Seed.smogonBWSets[0].moveset[2]}</li>
							<li>{Seed.smogonBWSets[0].moveset[3]}</li>

						</ol>
				</div>


			);

	}
}


ReactDOM.render(<PokemonComponent />, document.getElementById('main'));