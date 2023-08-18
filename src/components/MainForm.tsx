import { useState } from "react";
import FormInput from "./FormInput";
import Indicator from "./Indicator";
import * as Select from "@radix-ui/react-select";

const dateTypes = [
  { id: "quarter", text: "Квартал" },
  { id: "month", text: "Місяць" },
  { id: "week", text: "Тиждень" },
];

export default function MainForm() {
  const [focusedInput, setFocusedInput] = useState("");
  return (
    <>
      <div className="flex items-center gap-2 py-6">
        <div className="flex flex-grow justify-center text-xl font-semibold">
          LOGO
        </div>
        <Indicator id="desc" focusedId={focusedInput} className="bg-lime-600">
          Опис
        </Indicator>
        <Indicator
          id="analysis"
          focusedId={focusedInput}
          className="bg-cyan-600"
        >
          Аналіз
        </Indicator>
        <Indicator
          id="strategy"
          focusedId={focusedInput}
          className="bg-blue-600"
        >
          Стратегія
        </Indicator>
        <Indicator
          id="product"
          focusedId={focusedInput}
          className="bg-purple-600"
        >
          Продукт
        </Indicator>
        <Indicator
          id="resources"
          focusedId={focusedInput}
          className="bg-pink-600"
        >
          Ресурси
        </Indicator>
        <Indicator
          id="indication"
          focusedId={focusedInput}
          className="bg-orange-600"
        >
          Індикація
        </Indicator>
        <div className="flex-grow"></div>
      </div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          e.preventDefault();
          // placeholder to sending to server
          console.log(
            Object.fromEntries(new FormData(e.currentTarget).entries()),
          );
        }}
      >
        <div className="flex-grow"></div>
        <div className="flex flex-col gap-2">
          <FormInput
            focusedId={focusedInput}
            onFocusChange={setFocusedInput}
            id="desc"
            label="Опишіть вашу ідею в 2-3 реченнях"
          />
          <FormInput
            focusedId={focusedInput}
            onFocusChange={setFocusedInput}
            id="analysis"
            label="Який найперспективніший напрямок дій?"
          />
          <FormInput
            focusedId={focusedInput}
            onFocusChange={setFocusedInput}
            id="strategy"
            label="Що ви хочете реалізувати за найближчий період?"
          />
          <FormInput
            focusedId={focusedInput}
            onFocusChange={setFocusedInput}
            id="product"
            label="Яку цінність і кому ви пропонуєте?"
          />
          <FormInput
            focusedId={focusedInput}
            onFocusChange={setFocusedInput}
            id="resources"
            label="Які ресурси вам для цього необхідні?"
          />
          <FormInput
            focusedId={focusedInput}
            onFocusChange={setFocusedInput}
            id="indication"
            label="Які показники вам необхідно контролювати для успіху?"
          />
          <div className="group ml-14 flex flex-col">
            <label htmlFor="email" className="self-center font-medium">
              Залиште свою пошту для збереження даних і зворотнього звʼязку
            </label>
            <div>
              <input
                id="email"
                name="email"
                className="h-12 w-[36rem] rounded-xl border-2 border-gray-400 px-4 py-2 pr-36 focus:outline-none dark:border-gray-500 dark:bg-gray-800"
                type="email"
                required
              />
              <button className="-ml-32 h-12 w-32 rounded-xl border-2 border-green-500 font-semibold transition-all hover:border-gray-400 hover:bg-green-500 hover:text-white group-focus-within:border-gray-400 group-focus-within:bg-green-500 group-focus-within:text-white">
                Надіслати
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-0 flex-grow flex-col items-start justify-center pl-4">
          <Select.Root defaultValue={dateTypes[0].id} required name="dateType">
            <Select.Trigger className="rounded-xl border-2 border-gray-400 p-1">
              <Select.Value />
              <Select.Icon>▼</Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="select-none overflow-hidden rounded-xl border-2 border-gray-400 bg-white p-2 dark:bg-gray-800">
                <Select.Viewport className="">
                  {dateTypes
                    .slice(0, dateTypes.length - 1)
                    .map(({ id, text }) => (
                      <Select.Item
                        key={id}
                        value={id}
                        className="border-b border-gray-300 focus:bg-gray-100 focus:outline-none dark:focus:bg-gray-700"
                      >
                        <Select.ItemText>{text}</Select.ItemText>
                      </Select.Item>
                    ))}
                  <Select.Item
                    value={dateTypes[dateTypes.length - 1].id}
                    className=" focus:bg-gray-100 focus:outline-none dark:focus:bg-gray-700"
                  >
                    <Select.ItemText>
                      {dateTypes[dateTypes.length - 1].text}
                    </Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </form>
    </>
  );
}
