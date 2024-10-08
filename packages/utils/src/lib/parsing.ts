export type Source = { [k: number]: unknown, length: number }
export type Index = { $: number }
export type Rule<S extends Source> = (source: S, index: Index) => boolean

export const condition = <S extends Source>(rule: Rule<S>): Rule<S> => (source, index) => {
	if (index.$ < source.length && rule(source, index)) {
		index.$++

		return true
	}

	return false
}

export const many = <S extends Source>(rule: Rule<S>): Rule<S> => (source, index) => {
	if (!rule(source, index))
		return false

	while (rule(source, index));

	return true
}

export const optional = <S extends Source>(rule: Rule<S>): Rule<S> => (source, index) => {
	rule(source, index)

	return true
}

export const negativeLookahead = <S extends Source>(rule: Rule<S>): Rule<S> => (source, index) => {
	const start = index

	if (rule(source, index)) {
		index = start

		return false
	}

	return true
}

export const union = <S extends Source>(...rules: Rule<S>[]): Rule<S> => (source, index) => {
	for (const rule of rules) {
		if (rule(source, index))
			return true
	}

	return false
}

export const sequence = <S extends Source>(...rules: Rule<S>[]): Rule<S> => (source, index) => {
	const startIndex = index.$

	for (const rule of rules) {
		if (!rule(source, index)) {
			index.$ = startIndex

			return false
		}
	}

	return true
}
