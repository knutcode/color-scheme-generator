import axios from 'axios';
import { useState } from 'react';
import {
	Color,
	Hex,
	Content,
	HexContainer,
	SchemeContainer,
	HexWrapper,
	HexCopied,
	Header,
	ColorInput,
	SchemeSelect,
	Button,
} from './styles';

function App() {
	const [selectedScheme, setSelectedScheme] = useState('analogic');
	const [schemeColorValue, setSchemeColorValue] = useState('#ff8080');
	const [colorScheme, setColorscheme] = useState(['#FC7777', '#FCA27B', '#FDCB7F', '#FEF284', '#E7FE88']);
	const [activeCopied, setActiveCopied] = useState(false);
	const [copiedAlert, setCopiedAlert] = useState('');

	const fetchData = async () => {
		const res = await axios.get(
			`https://www.thecolorapi.com/scheme?hex=${schemeColorValue.slice(1)}&mode=${selectedScheme}&count=5`
		);
		const scheme = res.data.colors.map((item) => item.hex.value);
		console.log(scheme);
		setColorscheme(scheme);
	};

	const copyColor = (value) => {
		if (activeCopied) {
			return;
		} else {
			navigator.clipboard?.writeText && navigator.clipboard.writeText(value);
			setActiveCopied(true);
			setCopiedAlert(value);

			setTimeout(() => {
				setActiveCopied(false);
			}, 1500);
		}
	};

	return (
		<Content>
			<Header>
				<ColorInput
					type="color"
					defaultValue={schemeColorValue}
					onChange={(e) => setSchemeColorValue(e.target.value)}
				/>
				<SchemeSelect
					defaultValue={selectedScheme}
					onChange={(e) => setSelectedScheme(e.target.value)}
				>
					<option value="monochrome">Monochrome</option>
					<option value="monochrome-dark">Monochrome-dark</option>
					<option value="monochrome-light">Monochrome-light</option>
					<option value="analogic">Analogic</option>
					<option value="complement">Complement</option>
					<option value="analogic-complement">Analogic-complement</option>
					<option value="triad">Triad</option>
				</SchemeSelect>
				<Button onClick={fetchData}>Get color scheme</Button>
			</Header>

			<HexCopied className={activeCopied ? 'active' : null}>{copiedAlert} copied to clipboard!</HexCopied>
			<SchemeContainer>
				{colorScheme.map((color, i) => {
					return (
						<HexContainer key={i}>
							<Color
								style={{ background: `${color}` }}
								onClick={() => copyColor(color)}
							></Color>
							<HexWrapper onClick={() => copyColor(color)}>
								<Hex>{color}</Hex>
							</HexWrapper>
						</HexContainer>
					);
				})}
			</SchemeContainer>
		</Content>
	);
}

export default App;
