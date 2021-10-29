import React, {useState, useEffect} from 'react';
import NovItemOne from "./NovItemOne";
import NovItemTwo from "./NovItemTwo";
import NovItemThree from "./NovItemThree";
import NovItemFour from "./NovItemFour";
import cubanft from "../img/cubanft.jpg";

const novedades1 = [{ id: 1, foto: cubanft, name: "Cubano", price: 35 },];
const novedades2 = [{ id: 2, foto: cubanft, name: "Italiano", price: 35 },];
const novedades3 = [{ id: 3, foto: cubanft, name: "Chino", price: 35 },];
const novedades4 = [{ id: 4, foto: cubanft, name: "Eslabones", price: 35 },];

export default function Novedades() {

	const [nov1, setNov1] = useState(novedades1);
	const [nov2, setNov2] = useState(novedades2);
	const [nov3, setNov3] = useState(novedades3);
	const [nov4, setNov4] = useState(novedades4);

	useEffect(()=> {
		setNov1(novedades1);
		setNov2(novedades2);
		setNov3(novedades3);
		setNov4(novedades4);
	}, []);

	// console.log(nov1);
	// console.log(nov2);
	// console.log(nov3);
	// console.log(nov4);

    return (
        <div>
            <div className="novedades contenedor">
                <h2>Novedades</h2>
                <div className="novedades-grid">
                    {nov1.map((i) => <NovItemOne key={i.id} data={i} />)}
                    {nov2.map((i) => <NovItemTwo key={i.id} data={i} />)}
                    {nov3.map((i) => <NovItemThree key={i.id} data={i} />)}
                    {nov4.map((i) => <NovItemFour key={i.id} data={i} />)}
                </div>
            </div>
        </div>
    );
}