initSidebarItems({"enum":[["Hint","A hint at the underlying binary format for 16 bytes of arbitrary data"],["Object","A parseable object that goblin understands"]],"fn":[["peek","Peeks at the underlying Read object. Requires the underlying bytes to have at least 16 byte length. Resets the seek to `Start` after reading."],["peek_bytes","Peeks at `bytes`, and returns a `Hint`"]],"mod":[["archive","Implements a simple parser and extractor for a Unix Archive."],["container","Binary container size information and byte-order context"],["elf","The generic ELF module, which gives access to ELF constants and other helper functions, which are independent of ELF bithood.  Also defines an `Elf` struct which implements a unified parser that returns a wrapped `Elf64` or `Elf32` binary."],["elf32","The ELF 32-bit struct definitions and associated values, re-exported for easy “type-punning”"],["elf64","The ELF 64-bit struct definitions and associated values, re-exported for easy “type-punning”"],["error","A custom Goblin error"],["mach","The Mach-o, mostly zero-copy, binary format parser and raw struct definitions"],["pe","A PE32 and PE32+ parser"],["strtab","A byte-offset based string table. Commonly used in ELF binaries, Unix archives, and even PE binaries."]],"struct":[["HintData","Information obtained from a peek `Hint`"]]});