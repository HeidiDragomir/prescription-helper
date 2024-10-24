import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import FormRadio from "../../components/FormRadio";
import Input from "../../components/Input";
import Title from "../../components/Layout/Title";

const MalviktKalkylator = () => {
	return (
		<div className="w-full h-full desktop:w-[1000px] laptop:w-[1000px] m-auto desktop:p-12 laptop:p-12">
			<Title>Målvikt kalkylator (IsoBMI)</Title>
			<div className="desktop:w-[600px] laptop:w-[600px] tablet:w-[600px] m-auto border-2 p-12 bg-gray-light">
				<div className="flex flex-col gap-8">
					<div>
						<h2 className="text-2xl pb-2">Kön</h2>
						<div className="flex gap-4">
							<FormRadio label="Flicka" name="gender" value="girl" />
							<FormRadio label="Pojke" name="gender" value="boy" />
						</div>
					</div>
					<div>
						<h2 className="text-2xl pb-2">Ålder</h2>
						<div className="flex gap-4">
							<Dropdown
								label="Ålder"
								items={[
									"2 år",
									"3 år",
									"4 år",
									"5 år",
									"6 år",
									"7 år",
									"8 år",
									"9 år",
									"10 år",
									"11 år",
									"12 år",
									"13 år",
									"14 år",
									"15 år",
									"16 år",
									"17 år",
									"18 år",
								]}
							/>
							<Dropdown
								label="Ålder"
								items={[
									"0 månader",
									"1 månad",
									"2 månader",
									"3 månader",
									"4 månader",
									"5 månader",
									"6 månader",
									"7 månader",
									"8 månader",
									"9 månader",
									"10 månader",
									"11 månader",
								]}
							/>
						</div>
					</div>
					<div>
						<h2 className="text-2xl pb-2">Längd</h2>
						<Input type="number" name="height" placeholder="cm" label="cm" />
					</div>
					<div>
						<h2 className="text-2xl pb-2">Vikt</h2>
						<Input type="number" name="weight" placeholder="kg" label="kg" />
					</div>
					<div className="my-4 w-full">
						<p className="text-xl">
							Det ungefärliga kroppsmasseindexet är ..., som kan tolkas som
							betydlig övervikt.
						</p>
					</div>
					<div className="flex justify-center my-4">
						<Button className="bg-green-200 text-white">Beräkna</Button>
					</div>
					<div className="flex justify-center">
						<Button className="bg-orange-100">Reset</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MalviktKalkylator;
