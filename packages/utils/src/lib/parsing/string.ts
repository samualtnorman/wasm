import { condition, type Rule } from "../parsing"

export const terminal = (search: string): Rule<string> => (source, index) => {
	if (source.startsWith(search, index.$)) {
		index.$ += search.length

		return true
	}

	return false
}

export const range = (first: string, last: string) =>
	condition<string>((source, index) => source[index.$]! >= first && source[index.$]! <= last)

export const oneOf = (search: string) => condition<string>((source, index) => search.includes(source[index.$]!))
