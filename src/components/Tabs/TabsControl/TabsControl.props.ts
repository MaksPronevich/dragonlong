export interface TabsControlProps {
	tabsTitles: string[];
	selectedIndex: number;
	setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}
