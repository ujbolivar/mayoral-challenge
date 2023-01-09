import {
	Product,

} from '@/types/all_typedefs';


export const handleDiscount = (id) => {
	if (id % 2 === 0) {
		return { active: true, value: 20 };
	}
	return { active: false, value: 0 };
}

const [discount, setDiscount] = useState({ active: false, value: 0 });


useEffect(() => {
	if (id % 2 === 0) {
			setDiscount({ active: true, value: 20 });
	}
}, [id]);

function