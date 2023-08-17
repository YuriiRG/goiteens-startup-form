export default function FormInput({
  label,
  id,
}: {
  label: string;
  id: string;
  focusedId: string;
  onFocusChange: (newValue: string) => void;
}) {
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="roun m-4 h-4 w-4 flex-shrink-0 rounded bg-gray-300"></div>
        <div className="flex flex-grow flex-col">
          <label htmlFor={id} className="self-center font-semibold">
            {label}
          </label>
          <input
            id={id}
            className="h-12 w-[32rem] rounded-xl border-2 border-gray-400 px-4 py-2 focus:border-gray-900 focus:outline-none"
            type="text"
          />
        </div>
      </div>
    </>
  );
}
