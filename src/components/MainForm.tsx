import FormInput from "./FormInput";
import Indicator from "./Indicator";

export default function MainForm() {
  return (
    <>
      <div className="flex items-center gap-2 py-6">
        <div className="flex flex-grow justify-center text-xl font-semibold">
          LOGO
        </div>
        <Indicator className="bg-lime-600">Опис</Indicator>
        <Indicator className="bg-cyan-600">Аналіз</Indicator>
        <Indicator className="bg-blue-600">Стратегія</Indicator>
        <Indicator className="bg-purple-600">Продукт</Indicator>
        <Indicator className="bg-pink-600">Ресурси</Indicator>
        <Indicator className="bg-orange-600">Індикація</Indicator>
        <div className="flex-grow"></div>
      </div>
      <div className="flex">
        <div className="flex-grow"></div>
        <form className="flex flex-col gap-2">
          <FormInput label="Опишіть вашу ідею в 2-3 реченнях" />
          <FormInput label="Який найперспективніший напрямок дій?" />
          <FormInput label="Що ви хочете реалізувати за найближчий період?" />
          <FormInput label="Яку цінність і кому ви пропонуєте?" />
          <FormInput label="Які ресурси вам для цього необхідні?" />
          <FormInput label="Які показники вам необхідно контролювати для успіху?" />
        </form>
        <div className="flex-grow"></div>
      </div>
    </>
  );
}
