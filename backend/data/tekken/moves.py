from importlib import import_module
from itertools import chain
from typing import Any, Sequence

move_modules = [
	"alisa_moves",
	"anna_moves",
	"asuka_moves",
	"azucena_moves",
	"feng_moves",
	"heihachi_moves",
	"hwoarang_moves",
	"jin_moves",
	"jun_moves",
	"kazuya_moves",
	"kuma_moves",
	"lars_moves",
	"law_moves",
	"lee_moves",
	"leo_moves",
	"leroy_moves",
	"lidia_moves",
	"lili_moves",
	"miary_moves",
	"nina_moves",
	"reina_moves",
	"victor_moves",
	"zafina_moves",
]


def _load_moves_from_module(module_name: str) -> Sequence[dict[str, Any]]:
	module = import_module(f".{module_name}", package=__package__)
	base_name = module_name[:-6] if module_name.endswith("_moves") else module_name
	candidates = [
		f"{base_name.upper()}_MOVES",
		base_name.upper(),
		"MOVES",
	]

	for candidate in candidates:
		if hasattr(module, candidate):
			value = getattr(module, candidate)
			if isinstance(value, list):
				return value

	# Fallback: collect any attribute that looks like a moves list
	collected: list[dict[str, Any]] = []
	for attr_name in dir(module):
		if attr_name.startswith("_"):
			continue
		attr = getattr(module, attr_name)
		if isinstance(attr, list) and attr_name.endswith("_moves"):
			collected.extend(attr)

	if collected:
		return collected

	raise AttributeError(
		f"Could not find a moves list in data.tekken.{module_name}. Checked candidates: {candidates}"
	)


TEKKEN_MOVES = list(
    chain.from_iterable(_load_moves_from_module(module_name) for module_name in move_modules)
)
tekken_moves = TEKKEN_MOVES
__all__ = ["TEKKEN_MOVES", "tekken_moves"]