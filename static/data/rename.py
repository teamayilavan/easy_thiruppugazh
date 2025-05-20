import os
import shutil

folder = os.getcwd()
files = os.listdir(folder)
print(files)
i=1
for file in files:
    if file.endswith('.py'):
        print("skipping py file")
    else:
        shutil.copy(os.path.join(folder,file),os.path.join(folder,str(i)+".json"))
        i+=1



# def bulk_rename(dir_path, old_prefix, new_prefix):
#     """
#     Renames files in a directory by replacing a prefix in their names.

#     Args:
#         dir_path: The path to the directory containing the files.
#         old_prefix: The prefix to be replaced.
#         new_prefix: The new prefix to use.
#     """
#     for filename in os.listdir(dir_path):
#         if filename.startswith(old_prefix):
#             old_filepath = os.path.join(dir_path, filename)
#             new_filename = filename.replace(old_prefix, new_prefix, 1)  # Replace only the first occurrence
#             new_filepath = os.path.join(dir_path, new_filename)
#             os.rename(old_filepath, new_filepath)
#             print(f"Renamed '{filename}' to '{new_filename}'")

# # Example usage
# directory = "data"  # Replace with your directory path
# old_prefix = "old_"
# new_prefix = "new_"
# bulk_rename(directory, old_prefix, new_prefix)