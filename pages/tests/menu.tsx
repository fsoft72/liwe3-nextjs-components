import Button from "../../components/Button";
import Menu, { MenuHandler, MenuList } from "../../components/Menu";

const TestPage = () => {
	return (
		<div>
			<Menu isOpen={false}>
				<MenuHandler label="Click me, Johnny!" />
				<MenuList>
					<p>Menu list is here</p>

				</MenuList>
			</Menu>

			<Menu isOpen={true}>
				<MenuHandler label="Second menu" />
				<MenuList>
					<p>Menu list is here</p>

				</MenuList>
			</Menu>
		</div>
	);
};

export default TestPage;