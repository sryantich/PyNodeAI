import warnings

# Suppress the deprecation warning from httpx related to the 'app' shortcut.
warnings.filterwarnings("ignore", category=DeprecationWarning, module="httpx")