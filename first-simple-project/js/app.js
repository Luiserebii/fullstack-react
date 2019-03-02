class PokemonListComponent extends React.Component {


	//Array.map (thing of each array being iterated over => return value of each thing)

	render() {

				/*REMEMBER THAT THE BELOW ARE JUST HTML ATTRIBUTES; therefore, need {}*/

		let pokemonList = Seed.smogonBWSets.map((pokemon) => (

				<PokemonComponent 
					id={pokemon.id} 
					name = {pokemon.name}
					imgurl = {pokemon.imgurl}
					typing = {pokemon.typing}
					stats = {pokemon.stats}
					item = {pokemon.item}
					ability = {pokemon.ability}
					nature = {pokemon.nature}
					evs = {pokemon.evs}
					moveset = {pokemon.moveset}
				/>
			)

		);

		console.log(pokemonList);

		return (<div className="pokemon-list-component">{pokemonList}</div>); 

	}





}



class PokemonComponent extends React.Component {

	constructor(props){
		super(props);
	}

	render() {

			return (

				<div className="pokemon-component">
					<h3 className="name">{this.props.name}</h3>
					<img src={this.props.imgurl}/>
					<span>Typing: {this.props.typing.type1}</span><br />
					<span>Stats: </span>
						<ol>
							<li>HP: {this.props.stats.hp}</li>
							<li>Attack: {this.props.stats.atk}</li>
							<li>Defense: {this.props.stats.def}</li>
							<li>Sp. Atk: {this.props.stats.spa}</li>
							<li>Sp. Def: {this.props.stats.spd}</li>
							<li>Speed: {this.props.stats.spe}</li>
						</ol>
					<span>Item: {this.props.item}</span><br />
					<span>Ability: {this.props.ability}</span><br />
					<span>Nature: {this.props.nature}</span><br />
					<span>EVs: {/*this.props.evs*/}</span>
					<span>Moveset: </span>
						<ol>
							<li>{this.props.moveset[0]}</li>
							<li>{this.props.moveset[1]}</li>
							<li>{this.props.moveset[2]}</li>
							<li>{this.props.moveset[3]}</li>

						</ol>
				</div>


			);

	}
}


ReactDOM.render(<PokemonListComponent />, document.getElementById('main'));